---
type: property
interface: ISectionViewData
member: SelectiveSectioningList
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
  - ui
related:
  - ISectionViewData.FirstPlane
  - ISectionViewData.SecondPlane
  - ISectionViewData.ThirdPlane
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - selective
  - sectioning
  - selectivesectioninglist
  - isectionviewdata
  - view
  - data
  - list
  - object
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.SelectiveSectioningList

Gets or sets the bodies in the multibody part or the components in the assembly for selective sectioning in this section view.

## Signature

```csharp
System.Object SelectiveSectioningList {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies in the multibody part or an array of components in the assembly to selectively section (see Remarks )

## Remarks

To select each body in a multibody part or each component in an assembly for selective sectioning, specify a Mark of 8 for
IModelDocExtension::SelectByID2
. Select the section planes after selecting the bodies or components.
Call
ISectionViewData::ExcludeSelectedItems
to exclude or include the specified bodies in the multibody part or the specified components in the assembly in selective sectioning.
ISectionViewData::SelectiveSectioningList is only available if
ISectionViewData::SelectiveSection
is true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)

## See Also

- `ISectionViewData.FirstPlane`
- `ISectionViewData.SecondPlane`
- `ISectionViewData.ThirdPlane`