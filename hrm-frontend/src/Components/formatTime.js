/**
 * Convert 24-hour time string "HH:MM:SS" to 12-hour format with AM/PM
 * @param {string} time - Time string in "HH:MM:SS"
 * @returns {string} Formatted time in "HH:MM AM/PM" or "—" if empty
 */
export const formatTime = (time) => {
  if (!time) return "—";
  const [hour, minute] = time.split(':'); // ignoring seconds
  const date = new Date();
  date.setHours(parseInt(hour, 10));
  date.setMinutes(parseInt(minute, 10));
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  return date.toLocaleTimeString([], options);
};
