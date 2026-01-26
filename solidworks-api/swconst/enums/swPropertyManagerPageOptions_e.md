---
type: enum
name: swPropertyManagerPageOptions_e
description: Options for PropertyManager pages. Bitmask.
member_count: 19
docset: swconst
categories:
  - constants
used_by: []
---

# swPropertyManagerPageOptions_e

Options for PropertyManager pages. Bitmask.

## Values

| Member | Value | Description |
|---|---|---|
| `swPropertyManagerOptions_AbortCommands` | 1024 | or 0x400; Abort active command when PropertyManager page is displayed |
| `swPropertyManagerOptions_AllowHorizontalResize` |  | Obsolete; a s of SOLIDWORKS 2006 and later, all PropertyManager pages can be resized horizontally |
| `swPropertyManagerOptions_CancelButton` | 2 | or 0x2 |
| `swPropertyManagerOptions_CanEscapeCancel` | 4096 | or 0x1000; When a user presses the Esc key, the PropertyManager page will close the page; this enumerator only applies to pages that do not contain selection boxes |
| `swPropertyManagerOptions_CloseDialogButton` | 8 | or 0x8 |
| `swPropertyManagerOptions_DisablePageBuildDuringHandlers` | 32768 | or 0x8000; Paint the PropertyManager page after control returns to SOLIDWORKS from the add-in's handler; may help eliminate any flickering of the PropertyManager page of the add-in changes the visibility of numerous controls on the PropertyManager page |
| `swPropertyManagerOptions_DisableSelection` | 256 | or 0x100 |
| `swPropertyManagerOptions_GrayOutDisabledSelectionListboxes` | 65536 | or 0x10000; Controls whether a PropertyManager page should show its disabled selection list boxes so that they appear grayed out by coloring their backgrounds the same color as the divider box background. NOTE: Disabled selection list boxes should be hidden; graying them out is an exception to SOLIDWORKS standard practice. |
| `swPropertyManagerOptions_HandleKeystrokes` | 8192 | or 0x2000; Enables processing of keystrokes while the PropertyManager page is displayed; disabled by default |
| `swPropertyManagerOptions_LockedPage` | 4 | or 0x4 |
| `swPropertyManagerOptions_MultiplePages` | 16 | or 0x10 |
| `swPropertyManagerOptions_OkayButton` | 1 | or 0x1 |
| `swPropertyManagerOptions_PreviewButton` | 128 | or 0x80 |
| `swPropertyManagerOptions_PushpinButton` | 32 | or 0x20 |
| `swPropertyManagerOptions_RedoButton` | 16384 | or 0x4000; |
| `swPropertyManagerOptions_SupportsChainSelection` | 131072 | or 0x20000; If set, then show Select Chain : on the shortcut menu if a sketch entity is currently selected. - or - if nothing is selected, but the cursor is over a sketch entity when the right-mouse button was clicked. |
| `swPropertyManagerOptions_SupportsIsolate` | 262144 | or 0x40000; If set, then show Isolate item in right-mouse button menu of assembly components. This option must be used with swPropertyManagerOptions_LockedPage. |
| `swPropertyManagerOptions_UndoButton` | 2048 | or 0x800 |
| `swPropertyManagerOptions_WhatsNew` | 512 | or 0x200; Indicates that you want a What's New button to appear on your PropertyManager page |