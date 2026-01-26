---
type: enum
name: swAppCallBackCmd_e
description: Types of application callback functions.
member_count: 5
docset: swconst
categories:
  - constants
used_by: []
---

# swAppCallBackCmd_e

Types of application callback functions.

## Values

| Member | Value | Description |
|---|---|---|
| `swAppHelpContext` | 3 | = Not used |
| `swAppIsCmdEnabled` | 4 | = CommandGroup item is enabled |
| `swAppIsNewCmd` | 1 | = True if data is new, false if not |
| `swAppPostNotifyEvent` | 5 | = Your application is posting a callback to the SOLIDWORKS message queue that will be invoked when the callback is processed in the SOLIDWORKS message queue |
| `swAppWhatsNewDescription` | 2 | = Interactive What's New |