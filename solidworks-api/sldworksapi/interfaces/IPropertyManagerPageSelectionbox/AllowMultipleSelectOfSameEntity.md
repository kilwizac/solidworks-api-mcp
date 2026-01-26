---
type: property
interface: IPropertyManagerPageSelectionbox
member: AllowMultipleSelectOfSameEntity
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
  - allowmultipleselectofsameentity
  - ipropertymanagerpageselectionbox
  - manager
  - page
  - selectionbox
  - allow
  - multiple
  - select
  - same
  - entity
  - boolean
  - ipropertymanagerpage2
readonly: null
---

# IPropertyManagerPageSelectionbox.AllowMultipleSelectOfSameEntity

Gets or sets whether the same entity can be selected multiple times in this selection box.

## Signature

```csharp
System.Boolean AllowMultipleSelectOfSameEntity {get; set;}
```
## Parameters

None.

## Return Value

True if the same entity can be selected multiple times in this selection box, false if not

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.

## Examples

- IPropertyManagerPage2 (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IPropertyManagerPage2)