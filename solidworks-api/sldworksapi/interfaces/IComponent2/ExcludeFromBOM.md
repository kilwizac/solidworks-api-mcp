---
type: property
interface: IComponent2
member: ExcludeFromBOM
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.CompConfigProperties5
keywords:
  - excludefrombom
  - icomponent2
  - component2
  - exclude
  - bom
  - boolean
readonly: null
---

# IComponent2.ExcludeFromBOM

Obsolete. Superseded by IComponent2::GetExcludeFromBOM2 and IComponent2::SetExcludeFromBOM2.

## Signature

```csharp
System.Boolean ExcludeFromBOM {get; set;}
```
## Parameters

None.

## Return Value

True to exclude this component from the BOM, false to include it

## Remarks

This property applies to
table-based bills of materials
; it does not apply to Microsoft Excel-based bills of materials.
If you change this property to true, the name of the component in the FeatureManager design tree changes;
(Excluded from BOM)
is appended. To update the FeatureManager design tree, call
IFeatureManager::UpdateFeatureTree
.

## See Also

- `IAssemblyDoc.CompConfigProperties5`