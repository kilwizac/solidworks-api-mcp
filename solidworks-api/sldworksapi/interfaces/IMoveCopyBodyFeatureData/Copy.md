---
type: property
interface: IMoveCopyBodyFeatureData
member: Copy
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - bodies
  - see
  - also
  - ibody2
  - move
  - copy
  - imovecopybodyfeaturedata
  - body
  - feature
  - data
  - boolean
readonly: null
---

# IMoveCopyBodyFeatureData.Copy

Gets or sets whether to copy the selected bodies.

## Signature

```csharp
System.Boolean Copy {get; set;}
```
## Parameters

None.

## Return Value

True to copy the selected bodies, false to not

## Remarks

To get or set the number of copies of the selected bodies to create, call
IMoveCopyBodyFeatureData::NumberOfCopies
.
See
Accessing Selections that Define Features
for additional details on using this method.