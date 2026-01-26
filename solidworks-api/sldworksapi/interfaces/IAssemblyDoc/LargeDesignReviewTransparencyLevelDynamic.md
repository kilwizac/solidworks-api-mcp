---
type: property
interface: IAssemblyDoc
member: LargeDesignReviewTransparencyLevelDynamic
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.LargeDesignReviewTransparencyLevel
  - IAssemblyDoc.LargeDesignReviewTransparencyLevelEnabled
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - large
  - design
  - review
  - mode
  - largedesignreviewtransparencyleveldynamic
  - assembly
  - doc
  - transparency
  - level
  - dynamic
  - boolean
  - components
  - vb
  - net
  - vba
readonly: null
---

# IAssemblyDoc.LargeDesignReviewTransparencyLevelDynamic

Gets or sets whether to dynamically modify the transparency level of unmodified components in the graphics area when the transparency level slider is moved on the Filter Modified Components PropertyManager page.

## Signature

```csharp
System.Boolean LargeDesignReviewTransparencyLevelDynamic {get; set;}
```
## Parameters

None.

## Return Value

True to dynamically modify the transparency level of unmodified components in the graphics area when moving the transparency level slider, false to not

## Remarks

This property is valid only when the assembly is opened in Large Design Review mode, and one or more of its components have been modified. When this property is enabled, modified components are opaque, and unmodified components change transparency as the transparency level slider moves.
The Filter Modified Components PropertyManager page appears when you click
Filter Modified Components
on the Large Design Review toolbar.

## Examples

- Set Transparency of Components in Large Design Review (C#) (Set_Transparency_of_Components_LDR_Mode_Example_CSharp.htm)
- Set Transparency of Components in Large Design Review (VB.NET) (Set_Transparency_of_Components_LDR_Mode_Example_VBNET.htm)
- Set Transparency of Components in Large Design Review (VBA) (Set_Transparency_of_Components_LDR_Mode_Example_VB.htm)

## See Also

- `IAssemblyDoc.LargeDesignReviewTransparencyLevel`
- `IAssemblyDoc.LargeDesignReviewTransparencyLevelEnabled`