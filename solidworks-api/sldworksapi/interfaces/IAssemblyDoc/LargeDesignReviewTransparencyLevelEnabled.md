---
type: property
interface: IAssemblyDoc
member: LargeDesignReviewTransparencyLevelEnabled
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
  - largedesignreviewtransparencylevelenabled
  - assembly
  - doc
  - transparency
  - level
  - enabled
  - boolean
  - components
  - vb
  - net
  - vba
readonly: null
---

# IAssemblyDoc.LargeDesignReviewTransparencyLevelEnabled

Gets or sets whether transparency levels are activated for unmodified components in the graphics area for this assembly opened in Large Design Review mode.

## Signature

```csharp
System.Boolean LargeDesignReviewTransparencyLevelEnabled {get; set;}
```
## Parameters

None.

## Return Value

True if transparency levels are activated, false if not

## Remarks

This property is valid only when the assembly is opened in Large Design Review mode, and one or more of its components have been modified. If this property is enabled, modified components are opaque, and unmodified components are transparent.

## Examples

- Set Transparency of Components in Large Design Review (C#) (Set_Transparency_of_Components_LDR_Mode_Example_CSharp.htm)
- Set Transparency of Components in Large Design Review (VB.NET) (Set_Transparency_of_Components_LDR_Mode_Example_VBNET.htm)
- Set Transparency of Components in Large Design Review (VBA) (Set_Transparency_of_Components_LDR_Mode_Example_VB.htm)

## See Also

- `IAssemblyDoc.LargeDesignReviewTransparencyLevel`
- `IAssemblyDoc.LargeDesignReviewTransparencyLevelDynamic`