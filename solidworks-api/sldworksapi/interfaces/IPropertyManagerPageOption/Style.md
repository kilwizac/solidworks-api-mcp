---
type: property
interface: IPropertyManagerPageOption
member: Style
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - style
  - ipropertymanagerpageoption
  - manager
  - page
  - option
  - int32
readonly: null
---

# IPropertyManagerPageOption.Style

Gets or sets style-related properties for an option on a PropertyManager page.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Option style as defined in swPropMgrPageOptionStyle_e

## Remarks

You can only use this method to set properties on the PropertyManager page before it is displayed or while it is closed. See
IPropertyManagerPage2::Show2
and
IPropertyManagerPage2::Close
.