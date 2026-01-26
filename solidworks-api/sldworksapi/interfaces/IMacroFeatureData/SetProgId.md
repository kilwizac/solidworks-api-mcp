---
type: method
interface: IMacroFeatureData
member: SetProgId
returns: void
parameters:
  -
    name: ProgId
    type: System.String
    description: Name of the program ID for the component that implements the COM feature handler
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IMacroFeatureData.GetProgId
  - IMacroFeatureData.IsCOMFeature
keywords:
  - setprogid
  - imacrofeaturedata
  - macro
  - feature
  - data
  - prog
  - id
  - string
  - void
---

# IMacroFeatureData.SetProgId

Sets the version-independent program ID that is valid for this COM feature.

## Signature

```csharp
void SetProgId( 
   System.String
ProgId
)
```
## Parameters

- `ProgId` (System.String): Name of the program ID for the component that implements the COM feature handler

## Return Value

Unknown.

## Remarks

See
Exposed COM DLL or Executable and Macro Features
for details about macro features that define their behavior using COM.

## See Also

- `IMacroFeatureData.GetProgId`
- `IMacroFeatureData.IsCOMFeature`