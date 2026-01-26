---
type: method
interface: IDraftFeatureData2
member: GetOtherFacesFlagAtIndex
returns: System.Boolean
parameters:
  -
    name: Index
    type: System.Int16
    description: Number indicating a segment of the parting line
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDraftFeatureData2.SetOtherFacesFlagAtIndex
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - parting
  - lines
  - ipartinglinefeaturedata
  - getotherfacesflagatindex
  - draft
  - feature
  - data2
  - other
  - faces
  - flag
  - index
  - int16
  - boolean
---

# IDraftFeatureData2.GetOtherFacesFlagAtIndex

Gets the value of the Other Face option at the specified index.

## Signature

```csharp
System.Boolean GetOtherFacesFlagAtIndex( 
   System.Int16
Index
)
```
## Parameters

- `Index` (System.Int16): Number indicating a segment of the parting line

## Return Value

True to specify a different draft direction for each segment of the parting line, false to not

## See Also

- `IDraftFeatureData2.SetOtherFacesFlagAtIndex`