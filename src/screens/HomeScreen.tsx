import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { colors, spacing, fontSize } from '../constants/colors';
import { useApp } from '../context/AppContext';
import { SeasonSelector } from '../components/SeasonSelector';
import { ValueDisplay } from '../components/ValueDisplay';
import { CounterButton } from '../components/CounterButton';
import { QuoteDisplay } from '../components/QuoteDisplay';
import { SeasonModal } from '../components/SeasonModal';

export function HomeScreen() {
  const { state, incrementValue, setValue, addNewSeason } = useApp();
  const [modalVisible, setModalVisible] = useState(false);

  const handleSeasonPress = () => {
    setModalVisible(true);
  };

  const handleAddNewSeason = () => {
    addNewSeason();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>No Fap No Jerk</Text>
          <Text style={styles.subtitle}>坚持就是胜利</Text>
        </View>

        {/* Season Selector */}
        <View style={styles.section}>
          <SeasonSelector
            currentSeason={state.currentSeason}
            onPress={handleSeasonPress}
          />
        </View>

        {/* Value Display */}
        <View style={styles.section}>
          <ValueDisplay
            value={state.currentValue}
            onValueChange={setValue}
          />
        </View>

        {/* Counter Button */}
        <View style={styles.section}>
          <CounterButton onPress={incrementValue} />
        </View>

        {/* Quote Display */}
        <View style={styles.section}>
          <QuoteDisplay />
        </View>

        {/* Season History Summary */}
        {state.seasons.length > 0 && (
          <View style={styles.summarySection}>
            <Text style={styles.summaryText}>
              已完成 {state.seasons.length} 个赛季，累计 {state.seasons.reduce((acc, s) => acc + s.value, 0)} 天
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Season Modal */}
      <SeasonModal
        visible={modalVisible}
        currentSeason={state.currentSeason}
        currentValue={state.currentValue}
        seasons={state.seasons}
        onClose={() => setModalVisible(false)}
        onAddNewSeason={handleAddNewSeason}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing.xl,
    marginTop: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: fontSize.title,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: fontSize.medium,
    marginTop: spacing.xs,
  },
  section: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  summarySection: {
    alignItems: 'center',
    marginTop: spacing.md,
  },
  summaryText: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
  },
});
