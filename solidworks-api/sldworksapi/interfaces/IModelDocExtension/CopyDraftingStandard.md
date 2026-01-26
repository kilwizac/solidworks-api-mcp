---
type: method
interface: IModelDocExtension
member: CopyDraftingStandard
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Name of current custom drafting standard
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.DeleteDraftingStandard
  - IModelDocExtension.GetDraftingStandardNames
  - IModelDocExtension.LoadDraftingStandard
  - IModelDocExtension.RenameDraftingStandard
  - IModelDocExtension.SaveDraftingStandard
keywords:
  - drafting
  - standards
  - copydraftingstandard
  - imodeldocextension
  - model
  - doc
  - extension
  - copy
  - standard
  - name
  - string
  - boolean
---

# IModelDocExtension.CopyDraftingStandard

Copy the current custom drafting standard.

## Signature

```csharp
System.Boolean CopyDraftingStandard( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of current custom drafting standard

## Return Value

True if the custom drafting standard is copied, false if not

## See Also

- `IModelDocExtension.DeleteDraftingStandard`
- `IModelDocExtension.GetDraftingStandardNames`
- `IModelDocExtension.LoadDraftingStandard`
- `IModelDocExtension.RenameDraftingStandard`
- `IModelDocExtension.SaveDraftingStandard`