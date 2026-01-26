---
type: property
interface: IIndentFeatureData
member: SelectionState
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - selectionstate
  - iindentfeaturedata
  - indent
  - feature
  - data
  - selection
  - state
  - int32
readonly: null
---

# IIndentFeatureData.SelectionState

Gets or sets the side of the model to keep or remove.

## Signature

```csharp
System.Int32 SelectionState {get; set;}
```
## Parameters

None.

## Return Value

Side of the model to keep or remove as defined in swIndentSelectionState_e

## Remarks

Setting this property inverts the side of the
target body
to indent.