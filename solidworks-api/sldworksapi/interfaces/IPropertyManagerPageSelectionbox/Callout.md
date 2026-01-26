---
type: property
interface: IPropertyManagerPageSelectionbox
member: Callout
returns: Callout
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - callout
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
readonly: null
---

# IPropertyManagerPageSelectionbox.Callout

Gets or sets a multi-row, editable callout for this selection box.

## Signature

```csharp
Callout Callout {get; set;}
```
## Parameters

None.

## Return Value

Callout for this selection box

## Remarks

This property returns NULL if callouts are not enabled for this selection box. Use
IPropertyManagerPageSelectionbox::SetCalloutLabel
to enable the default callouts.
To create callouts for selection boxes:
Use
ISelectionManager::CreateCallout2
to create the basic callout information.
Use the
ICallout
interface to modify the look and of the callout.
Use ISelectionBox::Callout to set the callout information for the selection box.