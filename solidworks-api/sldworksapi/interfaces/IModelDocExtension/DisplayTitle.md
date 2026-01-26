---
type: property
interface: IModelDocExtension
member: DisplayTitle
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - DAssemblyDocEvents_RenameDisplayTitleNotifyEventHandler
  - DDrawingDocEvents_RenameDisplayTitleNotifyEventHandler
  - DPartDocEvents_RenameDisplayTitleNotifyEventHandler
keywords:
  - displaytitle
  - imodeldocextension
  - model
  - doc
  - extension
  - display
  - title
  - string
readonly: null
---

# IModelDocExtension.DisplayTitle

Gets and sets this model's title to display in the FeatureManager design tree.

## Signature

```csharp
System.String DisplayTitle {get; set;}
```
## Parameters

None.

## Return Value

Display title; empty string to display the model's file name

## Remarks

This property works like the
FeatureManager design tree > RMB > Rename tree item
.
To get the display title of lightweight assembly components, use
IComponent2::DisplayTitle
.

## See Also

- `DAssemblyDocEvents_RenameDisplayTitleNotifyEventHandler`
- `DDrawingDocEvents_RenameDisplayTitleNotifyEventHandler`
- `DPartDocEvents_RenameDisplayTitleNotifyEventHandler`