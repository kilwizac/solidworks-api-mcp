---
type: property
interface: ISectionViewData
member: SectionTransparentItemsTransparent
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related: []
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - transparent
  - sectioning
  - sectiontransparentitemstransparent
  - isectionviewdata
  - view
  - data
  - items
  - boolean
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.SectionTransparentItemsTransparent

Gets or sets whether the specified sectioned bodies in the multibody part or the specified sectioned components in the assembly are transparently sectioned in this section view.

## Signature

```csharp
System.Boolean SectionTransparentItemsTransparent {get; set;}
```
## Parameters

None.

## Return Value

True if the specified sectioned bodies in the multibody part or the specified sectioned components in the assembly are transparently sectioned in this section view; false if all sectioned bodies in the multibody part or all sectioned components in the assembly, except for the specified sectioned bodies or the specified sectioned components, are transparently sectioned in this section view (see Remarks )

## Remarks

Before calling this property, call
ISectionViewData::TransparentyList
to specify the sectioned bodies in the multibody part or the sectioned components in the assembly to transparently section. Call
ISectionViewData::TransparencyValue
to set the level of transparency of the sectioned bodies in the multibody part or the sectioned components in the assembly.
This property is only available if
ISectionViewData::ZonalSection
and
ISectionViewData::TransparentSection
are true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)