import { useWalletStore } from "../../src/stores/wallet-store";
import { View, Text, Switch, TouchableOpacity, Alert, StyleSheet } from "react-native";

export default function SettingsScreen() {
  const isDevnet = useWalletStore((s) => s.isDevnet);
  const toggleNetwork = useWalletStore((s) => s.toggleNetwork);
  const favorites = useWalletStore((s) => s.favorites);
  const searchHistory = useWalletStore((s) => s.searchHistory);
  const clearHistory = useWalletStore((s) => s.clearHistory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Settings</Text>

      {/* Network Toggle */}
      <View style={styles.row}>
        <View>
          <Text style={styles.label}>Use Devnet</Text>
          <Text style={styles.sublabel}>
            {isDevnet ? "Testing network (free SOL)" : "Real network"}
          </Text>
        </View>
        <Switch
          value={isDevnet}
          onValueChange={toggleNetwork}
          trackColor={{ true: "#14F195", false: "#333" }}
        />
      </View>

      {/* Stats */}
      <View style={styles.row}>
        <Text style={styles.label}>Saved Wallets</Text>
        <Text style={styles.value}>{favorites.length}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Search History</Text>
        <Text style={styles.value}>{searchHistory.length}</Text>
      </View>

      {/* Clear History */}
      <TouchableOpacity
        style={styles.dangerButton}
        onPress={() => {
          Alert.alert(
            "Clear History",
            "This will remove all your search history. Favorites won't be affected.",
            [
              { text: "Cancel", style: "cancel" },
              { text: "Clear", style: "destructive", onPress: clearHistory },
            ]
          );
        }}
      >
        <Text style={styles.dangerText}>Clear Search History</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D12",
    padding: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#16161D",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "500",
  },
  sublabel: {
    color: "#6B7280",
    fontSize: 14,
    marginTop: 4,
  },
  value: {
    color: "#14F195",
    fontSize: 18,
    fontWeight: "600",
  },
  dangerButton: {
    backgroundColor: "#16161D",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#2A2A35",
  },
  dangerText: {
    color: "#EF4444",
    fontSize: 16,
    fontWeight: "500",
  },
});