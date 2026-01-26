---
type: method
interface: IModelDocExtension
member: LoadDraftingStandard
returns: System.Boolean
parameters:
  -
    name: FileName
    type: System.String
    description: Path and filename of the drafting standard to load
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
  - IModelDocExtension.RenameDraftingStandard
  - IModelDocExtension.SaveDraftingStandard
keywords:
  - drafting
  - standards
  - loaddraftingstandard
  - imodeldocextension
  - model
  - doc
  - extension
  - load
  - standard
  - file
  - name
  - string
  - boolean
  - change
  - custom
  - vba
---

# IModelDocExtension.LoadDraftingStandard

Loads a custom drafting standard from a file.

## Signature

```csharp
System.Boolean LoadDraftingStandard( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Path and filename of the drafting standard to load

## Return Value

True if the specified drafting standard is loaded, false if not

## Examples

- Change Drafting Standard to Custom (VBA) (Change_Drafting_Standard_to_Custom_Example_VB.htm)

## See Also

- `IModelDocExtension.CopyDraftingStandard`
- `IModelDocExtension.DeleteDraftingStandard`
- `IModelDocExtension.GetDraftingStandardNames`
- `IModelDocExtension.RenameDraftingStandard`
- `IModelDocExtension.SaveDraftingStandard`