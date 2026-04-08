import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { colors, spacing, fontSize, borderRadius } from '../constants/colors';
import { Season } from '../types';

interface SeasonModalProps {
  visible: boolean;
  currentSeason: number;
  currentValue: number;
  seasons: Season[];
  onClose: () => void;
  onAddNewSeason: () => void;
}

export function SeasonModal({
  visible,
  currentSeason,
  currentValue,
  seasons,
  onClose,
  onAddNewSeason,
}: SeasonModalProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>赛季记录</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.scrollView}>
            {/* Current Season */}
            <View style={styles.seasonCard}>
              <View style={styles.seasonHeader}>
                <Text style={styles.seasonLabel}>当前赛季</Text>
                <View style={styles.currentBadge}>
                  <Text style={styles.currentBadgeText}>进行中</Text>
                </View>
              </View>
              <Text style={styles.seasonTitle}>Season {currentSeason}</Text>
              <Text style={styles.seasonValue}>{currentValue} 天</Text>
            </View>

            {/* History Seasons */}
            {seasons.length > 0 && (
              <View style={styles.historySection}>
                <Text style={styles.sectionTitle}>历史赛季</Text>
                {seasons
                  .slice()
                  .reverse()
                  .map((season) => (
                    <View key={season.id} style={styles.seasonCard}>
                      <View style={styles.seasonHeader}>
                        <Text style={styles.seasonLabel}>Season {season.id}</Text>
                        <Text style={styles.seasonDate}>
                          {formatDate(season.endedAt || '')}
                        </Text>
                      </View>
                      <Text style={styles.seasonValue}>{season.value} 天</Text>
                    </View>
                  ))}
              </View>
            )}

            {seasons.length === 0 && (
              <View style={styles.emptyState}>
                <Text style={styles.emptyText}>暂无历史记录</Text>
              </View>
            )}
          </ScrollView>

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              onAddNewSeason();
              onClose();
            }}
          >
            <Text style={styles.addButtonText}>添加新赛季</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.background,
    borderTopLeftRadius: borderRadius.large,
    borderTopRightRadius: borderRadius.large,
    maxHeight: '80%',
    borderTopWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    color: colors.text,
    fontSize: fontSize.title,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  closeButton: {
    padding: spacing.sm,
  },
  closeButtonText: {
    color: colors.textSecondary,
    fontSize: fontSize.large,
  },
  scrollView: {
    padding: spacing.lg,
    maxHeight: 400,
  },
  seasonCard: {
    backgroundColor: 'transparent',
    borderRadius: borderRadius.medium,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },
  seasonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  seasonLabel: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
  },
  currentBadge: {
    backgroundColor: 'transparent',
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.round,
    borderWidth: 1,
    borderColor: colors.text,
  },
  currentBadgeText: {
    color: colors.text,
    fontSize: 10,
    fontWeight: 'bold',
  },
  seasonTitle: {
    color: colors.text,
    fontSize: fontSize.large,
    fontWeight: '600',
  },
  seasonValue: {
    color: colors.text,
    fontSize: fontSize.xlarge,
    fontWeight: 'bold',
    marginTop: spacing.xs,
  },
  seasonDate: {
    color: colors.textSecondary,
    fontSize: fontSize.small,
  },
  historySection: {
    marginTop: spacing.md,
  },
  sectionTitle: {
    color: colors.textSecondary,
    fontSize: fontSize.medium,
    marginBottom: spacing.sm,
  },
  emptyState: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  emptyText: {
    color: colors.textSecondary,
    fontSize: fontSize.medium,
  },
  addButton: {
    backgroundColor: 'transparent',
    margin: spacing.lg,
    marginTop: 0,
    padding: spacing.md,
    borderRadius: borderRadius.medium,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.text,
  },
  addButtonText: {
    color: colors.text,
    fontSize: fontSize.large,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
