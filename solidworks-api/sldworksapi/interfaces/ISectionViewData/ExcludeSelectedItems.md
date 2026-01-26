---
type: property
interface: ISectionViewData
member: ExcludeSelectedItems
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
  - ui
related: []
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - selective
  - sectioning
  - excludeselecteditems
  - isectionviewdata
  - view
  - data
  - exclude
  - selected
  - items
  - boolean
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.ExcludeSelectedItems

Gets or sets whether to exclude or include the specific bodies in the multibody part or specific components in the assembly in selective sectioning in this section view.

## Signature

```csharp
System.Boolean ExcludeSelectedItems {get; set;}
```
## Parameters

None.

## Return Value

True to exclude specific bodies in the multibody part or specific components in the assembly in selective sectioning, false to include only the specific bodies in the part or the specific components in the assembly in selective sectioning (see Remarks )

## Remarks

Before calling this property, call
ISectionViewData::SelectiveSectioningList
to specify the bodies in the multibody part or the components in the assembly to exclude or include in selective sectioning.
ISectionViewData::ExcludeSelectedItems is only available if
ISectionViewData::SelectiveSection
is true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)