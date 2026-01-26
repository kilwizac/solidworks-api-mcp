---
type: method
interface: IModelDocExtension
member: RenameDraftingStandard
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: New name for current custom drafting standard
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.CopyDraftingStandard
  - IModelDocExtension.DeleteDraftingStandard
  - IModelDocExtension.GetDraftingStandardNames
  - IModelDocExtension.LoadDraftingStandard
  - IModelDocExtension.SaveDraftingStandard
keywords:
  - drafting
  - standards
  - renamedraftingstandard
  - imodeldocextension
  - model
  - doc
  - extension
  - rename
  - standard
  - name
  - string
  - boolean
---

# IModelDocExtension.RenameDraftingStandard

Rename the current custom drafting to the specifed name.

## Signature

```csharp
System.Boolean RenameDraftingStandard( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): New name for current custom drafting standard

## Return Value

True if the current custom drafting standard is renamed, false if not

## See Also

- `IModelDocExtension.CopyDraftingStandard`
- `IModelDocExtension.DeleteDraftingStandard`
- `IModelDocExtension.GetDraftingStandardNames`
- `IModelDocExtension.LoadDraftingStandard`
- `IModelDocExtension.SaveDraftingStandard`