---
type: property
interface: IRefPlaneFeatureData
member: ReversedReferenceDirection
returns: System.Boolean
parameters:
  -
    name: ReferenceIndex
    type: System.Int32
    description: Index of the reference whose direction to set as defined in swRefPlaneReferenceIndex_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRefPlaneFeatureData.Reference
keywords:
  - reversedreferencedirection
  - irefplanefeaturedata
  - ref
  - plane
  - feature
  - data
  - reversed
  - reference
  - direction
  - index
  - int32
  - boolean
readonly: null
---

# IRefPlaneFeatureData.ReversedReferenceDirection

Gets or sets whether to reverse the direction of the specified reference for this reference plane feature.

## Signature

```csharp
System.Boolean ReversedReferenceDirection( 
   System.Int32
ReferenceIndex
) {get; set;}
```
## Parameters

- `ReferenceIndex` (System.Int32): Index of the reference whose direction to set as defined in swRefPlaneReferenceIndex_e

## Return Value

True to reverse the direction of the specified reference, false to not

## Remarks

IMPORTANT:
Reference planes created in SOLIDWORKS 2010 or later are constraint based; reference planes created in SOLIDWORKS 2009 or earlier are not. See the
Remarks
section in the
IRefPlaneFeatureData interface
topic for details about reference planes and this interface.

## See Also

- `IRefPlaneFeatureData.Reference`