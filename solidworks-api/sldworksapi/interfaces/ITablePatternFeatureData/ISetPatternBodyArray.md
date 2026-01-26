---
type: method
interface: ITablePatternFeatureData
member: ISetPatternBodyArray
returns: void
parameters:
  -
    name: BodyCount
    type: System.Int32
    description: Number of seed bodies
  -
    name: ArrayDataIn
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of seed bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - ITablePatternFeatureData.GetPatternBodyCount
  - ITablePatternFeatureData.IGetPatternBodyArray
  - ITablePatternFeatureData.PatternBodyArray
keywords:
  - pattern
  - seed
  - bodies
  - isetpatternbodyarray
  - itablepatternfeaturedata
  - table
  - feature
  - data
  - body
  - array
  - count
  - int32
  - body2
  - void
---

# ITablePatternFeatureData.ISetPatternBodyArray

Sets the seed bodies for this table-driven pattern feature.

## Signature

```csharp
void ISetPatternBodyArray( 
   System.Int32
BodyCount
,
   ref Body2
ArrayDataIn
)
```
## Parameters

- `BodyCount` (System.Int32): Number of seed bodies
- `ArrayDataIn` (Body2): in-process, unmanaged C++: Pointer to an array of seed bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ITablePatternFeatureData.GetPatternBodyCount`
- `ITablePatternFeatureData.IGetPatternBodyArray`
- `ITablePatternFeatureData.PatternBodyArray`