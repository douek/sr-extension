// check the paywall
const tierCheck = (tier, user) => {
  if (tier === "free") {
    return true;
  }
  if (tier === "premium") {
    return user.premium;
  }
  if (tier === "pro") {
    return user.pro;
  }
  return false;
};

const checkFeatureEntitlement = (user, feature) => {
  if (user.features.includes(feature)) {
    return true;
  }
  return false;
};

const shouldShowPaywall = (tier, user, feature) => {
  if (feature) {
    return !checkFeatureEntitlement(user, feature);
  }
  return !tierCheck(tier, user);
};
