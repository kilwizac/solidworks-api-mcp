---
type: method
interface: IView
member: IsModelLoaded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
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
  - ismodelloaded
  - loaded
  - boolean
---

# IView.IsModelLoaded

Gets whether the model is loaded in this drawing view.

## Signature

```csharp
System.Boolean IsModelLoaded()
```
## Parameters

None.

## Return Value

True if the model has been loaded, false if not

## Remarks

If the drawing document was loaded as Detached, then the return value will be false. To load the model, use
IView::LoadModel
.

## See Also

- `IView.IsModelOutOfDate`