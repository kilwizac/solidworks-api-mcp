---
type: method
interface: IModelDocExtension
member: Rebuild
returns: System.Boolean
parameters:
  -
    name: Options
    type: System.Int32
    description: Type of rebuild as defined in swRebuildOptions_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDoc2.EditRebuild3
  - IModelDoc2.ForceRebuild3
  - IModelDocExtension.EditRebuildAll
  - IModelDocExtension.ForceRebuildAll
  - IModelDocExtension.NeedsRebuild2
keywords:
  - document
  - rebuild
  - model
  - documents
  - see
  - also
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - models
  - doc
  - extension
  - options
  - int32
  - boolean
  - assembly
  - vba
  - vb
  - net
---

# IModelDocExtension.Rebuild

Rebuilds the model in assembly and drawing documents and returns the status of the rebuild.

## Signature

```csharp
System.Boolean Rebuild( 
   System.Int32
Options
)
```
## Parameters

- `Options` (System.Int32): Type of rebuild as defined in swRebuildOptions_e

## Return Value

True if the rebuild is successful, false if not

## Remarks

Use
IModelDoc2::GetType
to check the type of document.

## Examples

- Rebuild an Assembly (VBA) (Rebuild_an_Assembly_Example_VB.htm)
- Rebuild an Assembly (VB.NET) (Rebuild_an_Assembly_Example_VBNET.htm)
- Rebuild an Assembly (C#) (Rebuild_an_Assembly_Example_CSharp.htm)

## See Also

- `IModelDoc2.EditRebuild3`
- `IModelDoc2.ForceRebuild3`
- `IModelDocExtension.EditRebuildAll`
- `IModelDocExtension.ForceRebuildAll`
- `IModelDocExtension.NeedsRebuild2`