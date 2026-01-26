---
type: property
interface: IAssemblyDoc
member: LargeDesignReviewTransparencyLevel
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.LargeDesignReviewTransparencyLevelDynamic
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - large
  - design
  - review
  - mode
  - largedesignreviewtransparencylevel
  - assembly
  - doc
  - transparency
  - level
  - double
  - components
  - vb
  - net
  - vba
readonly: null
---

# IAssemblyDoc.LargeDesignReviewTransparencyLevel

Gets or sets the transparency level of unmodified components in the graphics area of this assembly opened in Large Design Review mode.

## Signature

```csharp
System.Double LargeDesignReviewTransparencyLevel {get; set;}
```
## Parameters

None.

## Return Value

0.0 (opaque) <= transparency level of unmodified components <= 1.0 (invisible)

## Remarks

This property is valid only if all of the following are true:
This assembly is opened in Large Design Review mode.
One or more assembly components have been modified.
IAssemblyDoc::LargeDesignReviewTransparencyLevelEnabled
is set to true.
When transparency levels are enabled, modified components are opaque, and unmodified components have the transparency level specified by this property.

## Examples

- Set Transparency of Components in Large Design Review (C#) (Set_Transparency_of_Components_LDR_Mode_Example_CSharp.htm)
- Set Transparency of Components in Large Design Review (VB.NET) (Set_Transparency_of_Components_LDR_Mode_Example_VBNET.htm)
- Set Transparency of Components in Large Design Review (VBA) (Set_Transparency_of_Components_LDR_Mode_Example_VB.htm)

## See Also

- `IAssemblyDoc.LargeDesignReviewTransparencyLevelDynamic`