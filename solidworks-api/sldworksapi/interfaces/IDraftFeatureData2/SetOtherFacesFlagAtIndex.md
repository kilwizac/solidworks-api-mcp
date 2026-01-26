---
type: method
interface: IDraftFeatureData2
member: SetOtherFacesFlagAtIndex
returns: void
parameters:
  -
    name: Index
    type: System.Int16
    description: Number indicating a segment of the parting line
  -
    name: Flag
    type: System.Boolean
    description: True to specify a different draft direction for each segment of the parting line, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDraftFeatureData2.GetOtherFacesFlagAtIndex
keywords:
  - drafts
  - see
  - also
  - idraftfeaturedata2
  - parting
  - lines
  - ipartinglinefeaturedata
  - setotherfacesflagatindex
  - draft
  - feature
  - data2
  - other
  - faces
  - flag
  - index
  - int16
  - boolean
  - void
---

# IDraftFeatureData2.SetOtherFacesFlagAtIndex

Sets the Other Face option.

## Signature

```csharp
void SetOtherFacesFlagAtIndex( 
   System.Int16
Index
,
   System.Boolean
Flag
)
```
## Parameters

- `Index` (System.Int16): Number indicating a segment of the parting line
- `Flag` (System.Boolean): True to specify a different draft direction for each segment of the parting line, false to not

## Return Value

Unknown.

## See Also

- `IDraftFeatureData2.GetOtherFacesFlagAtIndex`