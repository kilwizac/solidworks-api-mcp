---
type: property
interface: IPropertyManagerPageNumberbox
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
  - ipropertymanagerpagenumberbox
  - manager
  - page
  - numberbox
  - int32
readonly: null
---

# IPropertyManagerPageNumberbox.Style

Gets or sets the style of the attached drop-down list for this number box.

## Signature

```csharp
System.Int32 Style {get; set;}
```
## Parameters

None.

## Return Value

Style of the attached drop-down list as defined in swPropMgrPageNumberBoxStyle_e

## Remarks

Use these methods and properties to set up and control the attached drop-down list:
IPropertyManagerPageNumberbox::AddItems
and
IPropertyManagerPageNumberbox::IAddItems
IPropertyManagerPageNumberbox::DeleteItem
IPropertyManagerPageNumberbox::Clear
IPropertyManagerPageNumberbox::CurrentSelection
IPropertyManagerPageNumberbox::Height
IPropertyManagerPageNumberbox::InsertItem
IPropertyManagerPageNumberbox::ItemText