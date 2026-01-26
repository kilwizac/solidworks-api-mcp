---
type: method
interface: IAnnotation
member: SetLeaderAttachmentPointAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of annotation (see Remarks )
  -
    name: X
    type: System.Double
    description: x-coordinate of attachment point
  -
    name: Y
    type: System.Double
    description: y-coordinate of attachment point
  -
    name: Z
    type: System.Double
    description: z-coordinate of attachment point
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IAnnotation.GetLeaderCount
  - IAnnotation.GetLeaderPointsAtIndex
  - IAnnotation.SetLeader3
keywords:
  - annotation
  - see
  - also
  - iannotation
  - leaders
  - annotations
  - setleaderattachmentpointatindex
  - leader
  - attachment
  - point
  - index
  - int32
  - double
  - boolean
---

# IAnnotation.SetLeaderAttachmentPointAtIndex

Sets the specified attachment point of a leader for an annotation with the specified index.

## Signature

```csharp
System.Boolean SetLeaderAttachmentPointAtIndex( 
   System.Int32
Index
,
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
)
```
## Parameters

- `Index` (System.Int32): Index of annotation (see Remarks )
- `X` (System.Double): x-coordinate of attachment point
- `Y` (System.Double): y-coordinate of attachment point
- `Z` (System.Double): z-coordinate of attachment point

## Return Value

True if leader attached successfully, false if not

## Remarks

The annotation must be of a type that supports leaders. Only notes, GTols, surface finish symbols, weld symbols, datum target symbols, and block instances support leaders of any kind.

## See Also

- `IAnnotation.GetLeaderCount`
- `IAnnotation.GetLeaderPointsAtIndex`
- `IAnnotation.SetLeader3`