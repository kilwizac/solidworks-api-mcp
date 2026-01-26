---
type: property
interface: IDragOperator
member: DragCorrected
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - dragcorrected
  - idragoperator
  - drag
  - operator
  - corrected
  - boolean
readonly: true
---

# IDragOperator.DragCorrected

Gets whether or not the drag operation was corrected.

## Signature

```csharp
System.Boolean DragCorrected {get;}
```
## Parameters

None.

## Return Value

True if remedial action occurred, false if not

## Remarks

If the desired orientation set by
IDragOperator::Drag
or
IDragOperator::IDrag
was not honored and remedial action occurred, then this property is set. This property is not set by
IDragOperator::DragAsUI
.