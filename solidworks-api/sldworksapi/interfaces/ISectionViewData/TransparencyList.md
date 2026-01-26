---
type: property
interface: ISectionViewData
member: TransparencyList
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
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
  - transparent
  - sectioning
  - transparencylist
  - isectionviewdata
  - view
  - data
  - transparency
  - list
  - object
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.TransparencyList

Gets or sets the sectioned bodies in the multibody part or the sectioned components in the assembly to transparently section in this section view.

## Signature

```csharp
System.Object TransparencyList {get; set;}
```
## Parameters

None.

## Return Value

Array of bodies in the multibody part or an array of components to transparently section (see Remarks )

## Remarks

Call this property before calling
ISectionViewData::SectionTransparentItemsTransparent
to specify which sectioned bodies in the multibody part or which sectioned components in the assembly to transparently section.
To select each sectioned body or component, specify a Mark of 32 for
IModelDocExtension::SelectByID2
. Select the section planes after selecting the sectioned bodies or components.
This property is only available if
ISectionViewData::ZonalSection
and
ISectionViewData::TransparentSection
are true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)

## See Also

- `ISectionViewData.FirstPlane`
- `ISectionViewData.SecondPlane`
- `ISectionViewData.ThirdPlane`