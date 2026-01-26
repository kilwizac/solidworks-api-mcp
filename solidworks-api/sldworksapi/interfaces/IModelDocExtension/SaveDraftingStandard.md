---
type: method
interface: IModelDocExtension
member: SaveDraftingStandard
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and filename for the current custom drafting standard to save to a file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IModelDocExtension.CopyDraftingStandard
  - IModelDocExtension.DeleteDraftingStandard
  - IModelDocExtension.GetDraftingStandardNames
  - IModelDocExtension.LoadDraftingStandard
  - IModelDocExtension.RenameDraftingStandard
keywords:
  - drafting
  - standards
  - savedraftingstandard
  - imodeldocextension
  - model
  - doc
  - extension
  - save
  - standard
  - file
  - name
  - string
  - boolean
---

# IModelDocExtension.SaveDraftingStandard

Saves the current custom drafting standard to a file.

## Signature

```csharp
System.Boolean SaveDraftingStandard( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and filename for the current custom drafting standard to save to a file

## Return Value

True if the current custom drafting standard is saved to a file, false if not

## See Also

- `IModelDocExtension.CopyDraftingStandard`
- `IModelDocExtension.DeleteDraftingStandard`
- `IModelDocExtension.GetDraftingStandardNames`
- `IModelDocExtension.LoadDraftingStandard`
- `IModelDocExtension.RenameDraftingStandard`