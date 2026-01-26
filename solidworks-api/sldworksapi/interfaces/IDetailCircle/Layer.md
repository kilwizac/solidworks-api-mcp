---
type: property
interface: IDetailCircle
member: Layer
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
related: []
keywords:
  - layer
  - idetailcircle
  - detail
  - circle
  - string
readonly: null
---

# IDetailCircle.Layer

Gets or sets the layer on which the detail circle is on.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Layer name

## Remarks

An empty string indicates no layer. If you set the layer to a layer name that does not exist, nothing happens.