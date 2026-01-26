---
type: property
interface: IExtrudeFeatureData2
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
  - multibody
  - merge
  - iextrudefeaturedata2
  - extrude
  - feature
  - data2
  - boolean
readonly: null
---

# IExtrudeFeatureData2.Merge

Gets or sets whether to merge the results of the extrude feature in a multibody part.

## Signature

```csharp
System.Boolean Merge {get; set;}
```
## Parameters

None.

## Return Value

True enables the merge results option, false disables it

## Remarks

The merge results option tells the SOLIDWORKS Design software whether or not to merge the
new body or bodies with existing bodies in the multibody part. This property is set
to True by default.