---
type: method
interface: IPropertyManagerPage2
member: SetExitConfirmationCursor
returns: void
parameters:
  -
    name: Enable
    type: System.Boolean
    description: True to enable OK cursor, false to not (see Remarks )
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related: []
keywords:
  - setexitconfirmationcursor
  - ipropertymanagerpage2
  - manager
  - page2
  - exit
  - confirmation
  - cursor
  - enable
  - boolean
  - void
---

# IPropertyManagerPage2.SetExitConfirmationCursor

Obsolete. Superseded by IPropertyManagerPage2::SetCursor.

## Signature

```csharp
void SetExitConfirmationCursor( 
   System.Boolean
Enable
)
```
## Parameters

- `Enable` (System.Boolean): True to enable OK cursor, false to not (see Remarks )

## Return Value

Unknown.

## Remarks

This method should only be used if your PropertyManager page has selection lists. For example, this cursor is displayed in the SOLIDWORKS Design user-interface when selecting one or more edges to fillet.
After enabling this cursor, you most likely should not disable it; instead, you should let SOLIDWORKS determine when to disable it. SOLIDWORKS disables this cursor when the cursor has moved even just a bit and replaces it with the cursor appropriate for the operation in progress.