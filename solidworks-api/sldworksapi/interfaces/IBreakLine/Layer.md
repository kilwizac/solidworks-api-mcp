---
type: property
interface: IBreakLine
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
  - ibreakline
  - break
  - line
  - string
readonly: null
---

# IBreakLine.Layer

Gets or sets the layer for this break line in the drawing view.

## Signature

```csharp
System.String Layer {get; set;}
```
## Parameters

None.

## Return Value

Name of the layer

## Remarks

An empty string indicates no layer. If you set the layer to a layer name that does not exist, nothing happens.