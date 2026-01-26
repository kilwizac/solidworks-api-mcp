---
type: property
interface: ILoftFeatureData
member: Merge
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - merge
  - iloftfeaturedata
  - loft
  - feature
  - data
  - boolean
readonly: null
---

# ILoftFeatureData.Merge

Gets or sets whether to merge the results of this loft feature in a multibody part.

## Signature

```csharp
System.Boolean Merge {get; set;}
```
## Parameters

None.

## Return Value

True merges the results of this loft feature in a multibody part, false does not

## Remarks

The merge results option tells the SOLIDWORKS Design software whether to merge the new body or bodies with existing bodies in the multibody part. This property is set to True by default.