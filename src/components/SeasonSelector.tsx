import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../constants/colors';

interface SeasonSelectorProps {
  currentSeason: number;
  onPress: () => void;
}

export function SeasonSelector({ currentSeason, onPress }: SeasonSelectorProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Season {currentSeason}</Text>
      <Text style={styles.arrow}>▼</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.card,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.medium,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    color: colors.text,
    fontSize: fontSize.large,
    fontWeight: '600',
    marginRight: spacing.sm,
  },
  arrow: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
  },
});
