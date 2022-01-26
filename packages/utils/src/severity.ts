import { Severity, SeverityLevel } from '@sentry/types';

// TODO This is a copy of what's in `@sentry/types`. Move it from there to a new `enums.ts` here in `@sentry/utils`, and
// then move `@sentry/types` from dep to dev dep in `package.json`
const SeverityLevels = ['fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical'];

function isSupportedSeverity(level: string): level is Severity {
  return SeverityLevels.indexOf(level as SeverityLevel) !== -1;
}
/**
 * Converts a string-based level into a {@link Severity}.
 *
 * @param level string representation of Severity
 * @returns Severity
 */
export function severityFromString(level: SeverityLevel | string): Severity {
  if (level === 'warn') return 'warning' as Severity;
  if (isSupportedSeverity(level)) {
    return level;
  }
  return 'log' as Severity;
}
