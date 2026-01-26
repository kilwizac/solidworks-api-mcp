---
type: property
interface: ISFSymbol
member: GOSTDefaultSymbol
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - gostdefaultsymbol
  - isfsymbol
  - isf
  - symbol
  - gost
  - default
  - boolean
readonly: null
---

# ISFSymbol.GOSTDefaultSymbol

Gets whether the GOST Add default symbol option is set.

## Signature

```csharp
System.Boolean GOSTDefaultSymbol {get; set;}
```
## Parameters

None.

## Return Value

True if the GOST Add default symbol option is set, false if it is not EndOLEPropertyRow

## Remarks

ISFSymbol::GOSTNotation
must be True to set this property.