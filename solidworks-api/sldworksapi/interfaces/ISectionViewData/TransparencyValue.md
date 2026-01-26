---
type: property
interface: ISectionViewData
member: TransparencyValue
returns: System.Double
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
  - transparencyvalue
  - isectionviewdata
  - view
  - data
  - transparency
  - value
  - double
  - selectively
  - transparently
  - vb
  - net
  - vba
readonly: null
---

# ISectionViewData.TransparencyValue

Gets or sets the level of transparency for the specified transparently sectioned bodies in the multibody part or the specified transparently sectioned components in the assembly in this section view.

## Signature

```csharp
System.Double TransparencyValue {get; set;}
```
## Parameters

None.

## Return Value

0.01 (least transparent) to 1.0 (most transparent)

## Remarks

To specify the sectioned bodies in the multibody part or the sectioned components in the assembly to transparently section, call
ISectionViewData::TransparencyList
and
ISectionViewData::SectionTransparentItemsTransparent
.
This property is only available if
ISectionViewData::ZonalSection
and
ISectionViewData::TransparentSection
are true.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)