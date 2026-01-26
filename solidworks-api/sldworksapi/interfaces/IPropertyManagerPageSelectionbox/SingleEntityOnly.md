---
type: property
interface: IPropertyManagerPageSelectionbox
member: SingleEntityOnly
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - singleentityonly
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - single
  - entity
  - only
  - boolean
  - ipropertymanagerpage2
readonly: null
---

# IPropertyManagerPageSelectionbox.SingleEntityOnly

Gets or sets whether this selection box is for single or multiple items.

## Signature

```csharp
System.Boolean SingleEntityOnly {get; set;}
```
## Parameters

None.

## Return Value

True if the selection box is for a single item, false for multiple items

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)