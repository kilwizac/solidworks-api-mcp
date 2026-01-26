---
type: property
interface: ISectionViewData
member: TransparentSection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - ui
related:
  - ISectionViewData.SelectiveSection
  - ISectionViewData.TransparencyValue
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - transparent
  - sectioning
  - transparentsection
  - isectionviewdata
  - view
  - data
  - boolean
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.TransparentSection

Gets or sets whether transparent sectioning is enabled in this section view.

## Signature

```csharp
System.Boolean TransparentSection {get; set;}
```
## Parameters

None.

## Return Value

True if transparent sectioning is enabled, false if not

## Remarks

You can specify which sectioned bodies in multibody parts or which sectioned components in assemblies to transparently section. See
ISectionViewData::TransparencyList
and
ISectionViewData::SectionTransparentItemsTransparent
.
ISectionViewData::TransparentSection is only available if
ISectionViewData::ZonalSection
is true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)

## See Also

- `ISectionViewData.SelectiveSection`
- `ISectionViewData.TransparencyValue`