---
type: method
interface: IGtol
member: SetCompositeFrame
returns: void
parameters:
  -
    name: Composite
    type: System.Boolean
    description: True to put the first two frames of this Gtol into a composite frame, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - dimensions
related:
  - IGtol.GetCompositeFrame
keywords:
  - setcompositeframe
  - igtol
  - gtol
  - composite
  - frame
  - boolean
  - void
---

# IGtol.SetCompositeFrame

Obsolete. Superseded by IGtol::SetCompositeFrame2.

## Signature

```csharp
void SetCompositeFrame( 
   System.Boolean
Composite
)
```
## Parameters

- `Composite` (System.Boolean): True to put the first two frames of this Gtol into a composite frame, false to not

## Return Value

Unknown.

## Remarks

Sets whether to put the first two frames of this Gtol into a composite frame.

## See Also

- `IGtol.GetCompositeFrame`