import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps as MuiAccordionSummaryProps,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps as MuiAccordionDetailsProps,
  AccordionActions as MuiAccordionActions,
  AccordionActionsProps as MuiAccordionActionsProps,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// ─── Accordion ────────────────────────────────────────────────────────────────

export interface AccordionProps extends MuiAccordionProps {}

export function Accordion({ ...props }: AccordionProps) {
  return <MuiAccordion {...props} />
}

// ─── AccordionSummary ─────────────────────────────────────────────────────────

export interface AccordionSummaryProps extends MuiAccordionSummaryProps {}

export function AccordionSummary({ expandIcon = <ExpandMoreIcon />, ...props }: AccordionSummaryProps) {
  return <MuiAccordionSummary expandIcon={expandIcon} {...props} />
}

// ─── AccordionDetails ─────────────────────────────────────────────────────────

export interface AccordionDetailsProps extends MuiAccordionDetailsProps {}

export function AccordionDetails(props: AccordionDetailsProps) {
  return <MuiAccordionDetails {...props} />
}

// ─── AccordionActions ─────────────────────────────────────────────────────────

export interface AccordionActionsProps extends MuiAccordionActionsProps {}

export function AccordionActions(props: AccordionActionsProps) {
  return <MuiAccordionActions {...props} />
}
