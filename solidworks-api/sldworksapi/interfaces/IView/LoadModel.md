---
type: method
interface: IView
member: LoadModel
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IsModelLoaded
  - IView.IsModelOutOfDate
keywords:
  - drawing
  - views
  - see
  - also
  - iview
  - models
  - model
  - documents
  - imodeldoc2
  - imodeldocextension
  - interfaces
  - view
  - loadmodel
  - load
  - int32
---

# IView.LoadModel

Loads the model if the model has not already been loaded for this drawing view.

## Signature

```csharp
System.Int32 LoadModel()
```
## Parameters

None.

## Return Value

0 if the model was loaded, -1 if not

## See Also

- `IView.IsModelLoaded`
- `IView.IsModelOutOfDate`