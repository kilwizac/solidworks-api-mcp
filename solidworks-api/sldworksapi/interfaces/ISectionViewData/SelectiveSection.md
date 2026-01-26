---
type: property
interface: ISectionViewData
member: SelectiveSection
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
  - ui
related:
  - ISectionViewData.TransparentSection
keywords:
  - section
  - views
  - see
  - also
  - idrsection
  - selective
  - sectioning
  - selectivesection
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

# ISectionViewData.SelectiveSection

Gets or sets whether selective sectioning is enabled in this section view.

## Signature

```csharp
System.Boolean SelectiveSection {get; set;}
```
## Parameters

None.

## Return Value

True if selective sectioning is enabled, false if not (see Remarks )

## Remarks

If this property is...
Then...
True
You can specify which bodies in the multibody part or which components in the assembly to selectively section. Call:
ISectionViewData::SelectiveSectioningList
to specify the bodies or components to selectively section.
ISectionViewData::ExcludeSelectedItems
to specify the bodies or components to exclude or include in selective sectioning.
False
All bodies in the multibody part and all components in the assembly are sectioned.

## Examples

- Selectively and Transparently Section a Section View (C#) (Selectively_and_Transparently_Section_a_Section_View_Example_CSharp.htm)
- Selectively and Transparently Section a Section View (VB.NET) (Selectively_and_Transparently_Section_a_Section_View_Example_VBNET.htm)
- Selectively and Transparently Section a Section View (VBA) (Selectively_and_Transparently_Section_a_Section_View_Example_VB.htm)

## See Also

- `ISectionViewData.TransparentSection`