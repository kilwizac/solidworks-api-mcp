---
type: method
interface: IDisplayData
member: GetArrowHeadAtIndex2
returns: System.Object
parameters:
  -
    name: Index
    type: System.Int32
    description: Index of the desired arrow head where the index begins at zero
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDisplayData.GetArrowHeadCount
keywords:
  - getarrowheadatindex2
  - idisplaydata
  - display
  - data
  - arrow
  - head
  - index2
  - index
  - int32
  - object
---

# IDisplayData.GetArrowHeadAtIndex2

Gets information on the specified arrow head.

## Signature

```csharp
System.Object GetArrowHeadAtIndex2( 
   System.Int32
Index
)
```
## Parameters

- `Index` (System.Int32): Index of the desired arrow head where the index begins at zero

## Return Value

Array of doubles (see Remarks )

## Remarks

The return value is the following array of doubles:
[
arrowHeadPt[3], arrowHeadDir[3], arrowHeadWidth, arrowHeadHeight, arrowHeadStyle, arrowHeadNormal[3]
]
where:
Array member...
Contains...
arrowHeadPt[3]
XYZ coordinates of arrow head tip location
arrowHeadDir[3]
XYZ coordinates of arrow head direction
arrowHeadWidth
Arrow head width measured along the arrow head direction
arrowHeadHeight
Arrow head height
arrowHeadStyle
Arrow head style as defined in
swArrowStyle_e
arrowHeadNormal[3]
XYZ coordinates of normal to the plane of the arrow head

## See Also

- `IDisplayData.GetArrowHeadCount`