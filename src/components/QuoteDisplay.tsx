import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../constants/colors';
import { Quote } from '../types';
import { quoteService } from '../services/quoteService';

export function QuoteDisplay() {
  const [quote, setQuote] = useState<Quote>({ id: 0, content: '', author: '' });

  useEffect(() => {
    const dailyQuote = quoteService.getDailyQuote();
    setQuote(dailyQuote);
  }, []);

  const handleRefresh = () => {
    const randomQuote = quoteService.getRandomQuote();
    setQuote(randomQuote);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>今日鸡汤</Text>
      <TouchableOpacity
        style={styles.quoteBox}
        onPress={handleRefresh}
        activeOpacity={0.8}
      >
        <Text style={styles.quoteContent}>"{quote.content}"</Text>
        <Text style={styles.quoteAuthor}>— {quote.author}</Text>
        <Text style={styles.refreshHint}>点击换一句</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    color: colors.textSecondary,
    fontSize: fontSize.medium,
    marginBottom: spacing.sm,
  },
  quoteBox: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.large,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    minHeight: 120,
    justifyContent: 'center',
  },
  quoteContent: {
    color: colors.text,
    fontSize: fontSize.large,
    lineHeight: 28,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  quoteAuthor: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
    textAlign: 'right',
    marginTop: spacing.md,
  },
  refreshHint: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
