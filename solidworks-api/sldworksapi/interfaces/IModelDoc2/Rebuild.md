---
type: method
interface: IModelDoc2
member: Rebuild
returns: void
parameters:
  -
    name: Options
    type: System.Int32
    description: Type of rebuild as defined in swRebuildOptions_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.EditRebuild3
  - IModelDoc2.ForceRebuild3
  - IModelDocExtension.NeedsRebuild2
keywords:
  - rebuild
  - imodeldoc2
  - model
  - doc2
  - options
  - int32
  - void
---

# IModelDoc2.Rebuild

Obsolete. Superseded by IModelDocExtension::Rebuild.

## Signature

```csharp
void Rebuild( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Type of rebuild as defined in swRebuildOptions_e

## Return Value

Unknown.

## Remarks

Use
IModelDoc2::GetType
to check the type of document.

## See Also

- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDocExtension.NeedsRebuild2`