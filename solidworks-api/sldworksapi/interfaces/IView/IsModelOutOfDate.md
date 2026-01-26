---
type: method
interface: IView
member: IsModelOutOfDate
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - IView.IsModelLoaded
  - IView.LoadModel
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
  - ismodeloutofdate
  - out
  - date
  - boolean
---

# IView.IsModelOutOfDate

Gets whether the model in this drawing view is up-to-date with the current model.

## Signature

```csharp
System.Boolean IsModelOutOfDate()
```
## Parameters

None.

## Return Value

True if the view is out of date, false if not

## Remarks

A model can be out-of-date in a Detached drawing where the model is not loaded, if any of the views in any of the sheets in the drawing refers to a model that has been modified and saved to disk since this drawing was last saved. This situation is flagged upon opening a document as well.
If you are using
ISldWorks::OpenDoc6
with the silent option enabled, this warning is returned via the Warnings argument by value swFileLoadWarning_ModelOutOfDate. If you print this drawing and have the swRapidDraftPrintOutOfSynchWaterMark user preference enabled (see
ISldWorks::SetUserPreferenceToggle
), then the printout will indicate this drawing as being out-of-synch.

## See Also

- `IView.IsModelLoaded`
- `IView.LoadModel`