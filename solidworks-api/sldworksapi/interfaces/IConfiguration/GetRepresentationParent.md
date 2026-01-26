---
type: method
interface: IConfiguration
member: GetRepresentationParent
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getrepresentationparent
  - iconfiguration
  - configuration
  - representation
  - parent
  - string
---

# IConfiguration.GetRepresentationParent

Gets the Physical Product represented by this configuration.

## Signature

```csharp
System.String GetRepresentationParent()
```
## Parameters

None.

## Return Value

Physical Product/Family member name

## Remarks

This method is valid only:
For
SOLIDWORKS Design Augmented
- and -
If
IConfiguration::Get3DExperienceType
is not 0